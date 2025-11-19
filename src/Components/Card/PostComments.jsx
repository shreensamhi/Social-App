import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { formatPostDate } from "../../Schema/FormateDate";
import {deleteCommentApi,editCommentApi} from "../../Services/CommentsServices";
import CommentMenu from "./CommentMenu";

export default function PostComments({
  photo,
  name,
  date,
  content,
  commentUserId,
  postUserId,
  commentId,
  callBack,
}) {
  const { userData } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  const handleEdit = () => setIsEditing(true);

  const handleSaveEdit = async () => {
    setLoadingEdit(true);
    const response = await editCommentApi(commentId, editContent);
    if (response.message) {
      setIsEditing(false);
      setIsEdited(true);
      await callBack();
    }
    setLoadingEdit(false);
  };

  const handleDelete = async () => {
    setLoadingDelete(true);
    const response = await deleteCommentApi(commentId);
    if (response.message) await callBack();
    setLoadingDelete(false);
  };

  const canModify =
    userData?._id === commentUserId && userData?._id === postUserId;

  return (
    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 relative w-full">
      <div className="flex items-start gap-2 sm:gap-3 w-full">
        <img
          alt={name}
          src={photo}
          onError={(e) => (e.target.src = userData.photo)}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
        />

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <Link className="font-semibold text-gray-900 dark:text-white">
              {name}
            </Link>
            <span className="text-gray-400">•</span>
            <span>{formatPostDate(date)}</span>
            {isEdited && (
              <span className="ml-1 text-[11px] text-gray-400 italic">
                (edited)
              </span>
            )}
          </div>

          {isEditing ? (
            <div className="mt-1">
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full text-sm rounded-md border resize-none border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 p-2 focus:ring-1 focus:ring-blue-500"
              />
              <div className="flex gap-2 mt-2 text-xs sm:text-sm">
                {loadingEdit ? (
                  <svg
                    className="size-6 text-blue-600 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                ) : (
                  <button
                    onClick={handleSaveEdit}
                    className="text-blue-500 cursor-pointer"
                  >
                    Save
                  </button>
                )}

                <button
                  onClick={() => setIsEditing(false)}
                  className="text-gray-400 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-700 dark:text-gray-200 mt-1 break-words">
              {editContent}
            </p>
          )}
        </div>
      </div>

      {canModify && (
        <CommentMenu
          onEdit={handleEdit}
          onDelete={handleDelete}
          loading={loadingDelete}
        />
      )}
    </div>
  );
}

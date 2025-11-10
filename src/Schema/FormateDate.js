export function formatPostDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHours = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSec < 60) return "Just now";
  if (diffMin < 60) return diffMin + "m";
  if (diffHours < 24) return diffHours + "h";
  if (diffDays < 7) return diffDays + "d";

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" }); 

  if (date.getFullYear() === now.getFullYear()) {
    return `${day} ${month}`; 
  }

  return `${day} ${month} ${date.getFullYear()}`; 
}

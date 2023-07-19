import isEmail from "validator/lib/isEmail";

export function validateEmail(email: string): boolean {
  return isEmail(email);
}

export function validateLink(link: string): boolean {
  try {
    const url = new URL(link);
    const hostname = url.hostname;
    const pathname = url.pathname;

    switch (true) {
      case hostname.includes("linkedin.com") && pathname.startsWith("/in/"):
        return true;
      case hostname.includes("github.com") && pathname.split("/").length === 2:
        return true;
      case hostname.includes("youtube.com") && pathname.startsWith("/user/"):
        return true;
      case hostname.includes("twitter.com") && pathname.split("/").length === 2:
        return true;
      case hostname.includes("facebook.com") && pathname.startsWith("/"):
        return true;
      case hostname.includes("instagram.com") &&
        pathname.split("/").length === 2:
        return true;
      default:
        return false;
    }
  } catch (e) {
    return false;
  }
}

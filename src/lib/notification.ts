import { toast } from "qwik-sonner";

type NotificationType = "success" | "error" | "warning" | "info";
export const notify = (message: string, type: NotificationType) => {
  switch (type) {
    case "success":
      return toast.success(message);
    case "error":
      return toast.error(message);
    case "warning":
      return toast.warning(message);
    case "info":
      return toast.info(message);
  }
};

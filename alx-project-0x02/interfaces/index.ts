export interface CardProps {
  title: string;
  content: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: Omit<Post, "id">) => void;
}

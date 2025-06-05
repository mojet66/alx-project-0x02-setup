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

export interface ButtonProps {
  children: React.ReactNode; // Content inside the button (e.g., text, icon)
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void; // Optional click handler
  className?: string; // Optional for additional custom classes
  type?: "button" | "submit" | "reset"; // Optional button type
  disabled?: boolean; // Optional disabled state
}

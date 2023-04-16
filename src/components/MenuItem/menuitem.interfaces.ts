export default interface MenuItemProps {
  text: string;
  icon: React.ReactNode;
  link?: string;
  onClick?: () => void;
}

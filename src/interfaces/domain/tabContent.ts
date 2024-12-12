export interface TabContent {
  id: string;
  title: string;
  description?: string;
  sections?: {
    label: string;
    options?: { value: string; label: string }[];
    defaultValue?: string;
    checkbox?: { id: string; label: string };
    checkboxes?: { id: string; label: string }[];
  }[];
  currentTaskLabel?: string;
  tasks?: string[];
}
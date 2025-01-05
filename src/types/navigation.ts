export interface SubMenuItem {
    title: string;
    href: string;
    description?: string;
    badge?: string;
  }
  
  export interface MenuItem {
    title: string;
    href: string;
    submenu?: SubMenuItem[];
  }
  
  export interface NavigationSection {
    title: string;
    items: MenuItem[];
  }
  
  
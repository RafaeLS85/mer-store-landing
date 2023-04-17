export interface MenuItems {
  name: string;
  id: number;
  url: string;
}

export const items: MenuItems[] = [
    { name: "Home", id: 0, url: "/" },
    { name: "Nosotros", id: 1, url: "/about" },
    { name: "Productos", id: 2, url: "/products" },
    { name: "Contacto", id: 3, url: "/contact" },
  ];
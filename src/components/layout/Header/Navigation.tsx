interface NavigationProps {
  currentPath?: string;
}

export const Navigation = ({ currentPath = '/' }: NavigationProps) => {
  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/headphones', label: 'HEADPHONES' },
    { href: '/speakers', label: 'SPEAKERS' },
    { href: '/earphones', label: 'EARPHONES' },
  ];

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`text-subtitle font-bold tracking-wide transition-colors duration-200 ${
            currentPath === item.href
              ? 'text-audiophile-orange'
              : 'text-white hover:text-audiophile-orange'
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

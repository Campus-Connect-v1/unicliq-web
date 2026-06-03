import { useCallback, useState, useEffect } from 'react';

import './BubbleMenu.css';

const DEFAULT_ITEMS = [
  {
    label: 'home',
    href: '#',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'about',
    href: '#about',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '#',
    ariaLabel: 'Documentation',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'blog',
    href: '#',
    ariaLabel: 'Blog',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '#',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];

interface BubbleMenuProps {
  logo: React.ReactNode;
  onMenuClick?: (isOpen: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  menuAriaLabel?: string;
  menuBg?: string;
  menuContentColor?: string;
  useFixedPosition?: boolean;
  items?: {
    label: string;
    href: string;
    ariaLabel: string;
    rotation: number;
    hoverStyles: {
      bgColor: string;
      textColor: string;
    };
  }[];
  animationEase?: string;
  animationDuration?: number;
  staggerDelay?: number;
}

export default function BubbleMenu({
  logo,
  onMenuClick,
  className,
  style,
  menuAriaLabel = 'Toggle menu',
  menuBg = '#fff',
  menuContentColor = '#111',
  useFixedPosition = false,
  items
}: BubbleMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = items?.length ? items : DEFAULT_ITEMS;
  const containerClassName = ['bubble-menu', useFixedPosition ? 'fixed' : 'absolute', className]
    .filter(Boolean)
    .join(' ');

  const handleToggle = () => {
    const nextState = !isMenuOpen;
    setIsMenuOpen(nextState);
    onMenuClick?.(nextState);
  };

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    onMenuClick?.(false);
  }, [onMenuClick]);

  useEffect(() => {
    document.body.classList.toggle('bubble-menu-open', isMenuOpen);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('bubble-menu-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <>
      <nav className={containerClassName} style={style} aria-label="Main navigation">
        <a className="bubble logo-bubble" href="#home" aria-label="uniCLIQ home" style={{ background: menuBg }}>
          <span className="logo-content">
            {typeof logo === 'string' ? <img src={logo} alt="Logo" className="bubble-logo" /> : logo}
          </span>
        </a>

        <div className="desktop-link-row" aria-label="Primary links">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} className="desktop-link">
              {item.label}
            </a>
          ))}
        </div>

        <a className="desktop-cta" href="#download">
          Get early access
        </a>

        <button
          type="button"
          className={`bubble toggle-bubble menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={handleToggle}
          aria-label={menuAriaLabel}
          aria-pressed={isMenuOpen}
          style={{ background: menuBg }}
        >
          <span className="menu-line" style={{ background: menuContentColor }} />
          <span className="menu-line short" style={{ background: menuContentColor }} />
        </button>
      </nav>
      <div className={`mobile-menu-panel ${isMenuOpen ? 'open' : ''}`} aria-hidden={!isMenuOpen}>
        <div className="mobile-menu-inner">
          <p className="mobile-menu-kicker">Campus menu</p>
          {menuItems.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.ariaLabel || item.label}
              className="mobile-menu-link"
              onClick={closeMenu}
              style={{ '--link-accent': item.hoverStyles?.bgColor || '#003554', '--item-index': idx } as React.CSSProperties & Record<string, string | number>}
            >
              <span>{item.label}</span>
              <span className="mobile-link-count">0{idx + 1}</span>
            </a>
          ))}
          <a className="mobile-menu-cta" href="#download" onClick={closeMenu}>
            Join the waitlist
          </a>
        </div>
      </div>
    </>
  );
}

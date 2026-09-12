import './theme.css';

/**
 * MobileLayout
 * Wraps a screen's content: centers it on wider viewports (tablet/desktop
 * preview), pins to mobile width, and reserves space at the bottom for
 * BottomNav so content never sits underneath it.
 *
 * Usage:
 *   <MobileLayout>
 *     <FeedScreen />
 *   </MobileLayout>
 */
export default function MobileLayout({ children, hideBottomNavSpacing = false }) {
  return (
    <div
      style={{
        minHeight: '100dvh',
        background: 'var(--viora-bg-primary)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 'var(--viora-max-width)',
          minHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: hideBottomNavSpacing
            ? 0
            : 'calc(var(--viora-bottom-nav-height) + var(--viora-safe-bottom))',
        }}
      >
        {children}
      </div>
    </div>
  );
}
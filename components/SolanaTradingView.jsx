import { useEffect, useRef } from 'react';

const SolanaTradingViewWidget = () => {
  const containerRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        container_id: containerRef.current.id,
        width: '100%',
        height: 500,
        symbol: 'BINANCE:SOLUSDT', // Symbol for Solana on Binance
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        withdateranges: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        show_popup_button: true,
        popup_width: '1000',
        popup_height: '650',
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div id="tradingview-widget" ref={containerRef} className="tradingview-widget-container" />;
};

export default SolanaTradingViewWidget;
import React, { useEffect } from 'react';

function DesktopNotification() {
  useEffect(() => {
    if (!('Notification' in window)) {
      console.log('Tarayıcı masaüstü bildirimleri desteklemiyor');
    } else {
      Notification.requestPermission();
    }
  }, []);

  const showNotification = () => {
    var options = {
      body: 'Merhabalar withdraw islemi yapmaya calisiyorum fakat button bir turlu tiklanilabilir hale gelmiyor her seyi dogru dolduruyorum aslinda isterseniz gorselde atabilirim nasil cikacagim isin icinden anlayamadim yardimci olur musunuz?',
      icon: './newuser.png',
      dir: 'ltr',
    };

    new Notification('New Chat Notification', options);
  };

  return (
    <div>
      <button onClick={showNotification}>Bildirimi Göster</button>
    </div>
  );
}

export default DesktopNotification;

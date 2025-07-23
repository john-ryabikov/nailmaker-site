"use client"

import Script from "next/script"

type YandexMetrikaInitParameters = {
    accurateTrackBounce?: boolean | number,
    childIframe?: boolean,
    clickmap?: boolean,
    defer?: boolean,
    ecommerce?: boolean | string | [],
    params?: unknown | [],
    userParams?: unknown,
    trackHash?: boolean,
    trackLinks?: boolean,
    trustedDomains?: string[],
    type?: number,
    webvisor?: boolean,
    triggerEvent?: boolean,
    sendTitle?: boolean
}

interface Props {
  id: number,
  initParameters?: YandexMetrikaInitParameters
};

export default function YandexMetrika({ id, initParameters}: Props) {
  /* eslint-disable @next/next/no-img-element */
  return (
    <>
      <Script type="text/javascript" id={`ym_${id}`}>
        {`(function (m, e, t, r, i, k, a) {
  m[i] =
    m[i] ||
    function () {
      (m[i].a = m[i].a || []).push(arguments);
    };
  m[i].l = 1 * new Date();
  for (var j = 0; j < document.scripts.length; j++) {
    if (document.scripts[j].src === r) {
      return;
    }
  }
  (k = e.createElement(t)),
    (a = e.getElementsByTagName(t)[0]),
    (k.async = 1),
    (k.src = r),
    a.parentNode.insertBefore(k, a);
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(${id}, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true,
        ecommerce:"dataLayer"
   });`}    
      </Script>
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${id}`}
            style={{ position: "absolute", left: "-9999px;" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  )
}
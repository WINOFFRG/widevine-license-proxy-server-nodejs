# Widevine License Acquisition Reverse Proxy Server
Licensing Servers are the building blocks in streaming digitally protected media content. When the player receives the Encrypted stream it then asks the licensing server for the keys of the encrypted media which is processed by CDM (Content Decryption Module) and used to play the video securely in the application.

<p align="center">
  <img src="https://cdn-images-1.medium.com/max/800/1*kfXamDcuCaS1NTfWcdDyMw.png">
</p>

## 📃 Table of Contents:
1. Analysis
2. Setting up Shaka Player
3. Reverse Proxy Server
4. Playback & Optimization

I have written an article on medium here and explained in great depth. [Check that our here!](https://medium.com/@winoffrg/widevine-license-acquisition-reverse-proxy-server-ac49402d6b4a) If this worked for you make sure to give a ⭐ to this repository.

## Server servering request to Shaka Player Test Streams
<p align="center">
  <img src="https://cdn-images-1.medium.com/max/800/1*u_szKwn1IWL8fnKjJVh7WA.png">
</p>

TYPE | #1 | #2 
--- | --- | --- 
MANIFEST | [Shaka MPEG-DASH](https://storage.googleapis.com/shaka-demo-assets/sintel-widevine/dash.mpd) | [Bitmovin MPEF-DASH](https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd)
LICENSE | [Widevine Proxy](https://cwip-shaka-proxy.appspot.com/no_auth) | [Widevine Proxy](https://widevine-proxy.appspot.com/proxy)

## 🔨 Optimization / #FollowUP:
- [ ] For better performance, we can also bring http2 (SPDY) into view.
- [ ] Making it work over text or UTF-8 type response.
- [ ] Bringing a cache layer as middleware which serves the access tokens to request license if being used. (Optional)
- [ ] Keep connection alive with server for clients who are requesting license again and again.
- [ ] Testing with other DRM Providers, the Concept remains the same.

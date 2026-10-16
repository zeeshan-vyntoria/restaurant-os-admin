# RestaurantOS Admin

Private platform-administration frontend for RestaurantOS. This repository contains the Super Admin portal only.

## Run locally

```bash
npm install
npm run dev
```

The Vite app runs at `http://localhost:5173`. In demo mode, use `ayesha@restaurantos.io`, any password, and any six-digit MFA code.

The portal connects to `http://localhost:5000/api` by default. Set `VITE_API_BASE_URL` to use another backend, or set `VITE_USE_MOCKS=true` only for an isolated demo.

## Included routes

- `/admin` — platform dashboard
- `/admin/tenants` — tenant management
- `/admin/onboarding` — restaurant onboarding
- `/admin/subscriptions` — plans and billing
- `/admin/users` — platform users and access
- `/admin/security` — authentication and audit controls
- `/admin/config` — platform configuration
- `/admin/support` — support and monitoring

Shared API contracts and the typed API client live in `packages/` so this repository builds independently.

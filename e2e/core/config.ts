import dotenv from 'dotenv';

export const config = {
  IMG_THRESHOLD: { threshold: 0.4 },
  BASE_API_URL: 'https://serverest.dev',
  TIMEOUT: 30000,
};

dotenv.config({
  path: process.env.NODE_ENV_TEST === 'develop' ? '.env.dev' : '.env',
});

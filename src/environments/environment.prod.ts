import { Environment } from '@abp/ng.core';

const baseUrl = 'https://zippy-malabi-6a3450.netlify.app';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://dasargo-001-site1.ctempurl.com',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: false
  },
  apis: {
    default: {
      url: 'http://dasargo-001-site1.ctempurl.com',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;

const isDevLogEnabled = (): boolean =>
  process.env.NODE_ENV === 'development' && process.env.DEV_LOG === 'true';
export default isDevLogEnabled;

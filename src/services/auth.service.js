const FAKE_USER = {
  email: "admin@admin.com",
  password: "123456",
  role: "admin",
};

export function validateUserCredentials(email, password) {
  if (email === FAKE_USER.email && password === FAKE_USER.password) {
    return { email: FAKE_USER.email, role: FAKE_USER.role };
  }
  return null;
}

export function validateName(login: string) {
  const MIN_LENGTH = 3;
  return !(!login || login.length < MIN_LENGTH);
}

export function validateEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !(!email || !re.test(email));
}

export function validateSubmit(name: string, email: string): boolean {
  return validateName(name) && validateEmail(email);
}

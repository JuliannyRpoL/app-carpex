export function isLoggedIn(): boolean {
  let user = localStorage.getItem('user_data');
  let isLoggedUser: boolean;

  user !== null ? (isLoggedUser = true) : (isLoggedUser = false);

  return isLoggedUser;
}

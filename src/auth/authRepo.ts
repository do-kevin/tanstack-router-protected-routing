export default class AuthReposiory {
  _token = false;

  get token() {
    return this._token;
  }

  set token(newValue: boolean) {
    this._token = newValue;
  }
}

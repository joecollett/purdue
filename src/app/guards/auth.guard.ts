import { CanActivate } from "@angular/router";

export class AlwaysAuthGuard implements CanActivate {
  canActivate() {
    return true;
  }
}

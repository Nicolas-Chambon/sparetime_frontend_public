import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  get length(): number {
    return localStorage.length;
  }

  clear(): void {
    localStorage.clear();
  }

  getItem(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  setItem(key: string, val: any): void {
    localStorage.setItem(key, JSON.stringify(val));
  }
}

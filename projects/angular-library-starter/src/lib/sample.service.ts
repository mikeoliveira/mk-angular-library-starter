import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AngularLibraryStarterSampleService {
  public getBestFramework(): string {
    return 'Angular-4';
  }
}

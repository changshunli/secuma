import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppComponent, LoginDialog} from './app.component';
import {ContextMenuPanel, FTreeComponent, NewFileDialog} from './ftree/ftree.component';
import {FileService} from './provider/file.service';
import {GetFileName, ByteFormat} from './provider/fformat.pipe';
import {FeditComponent} from './fedit/fedit.component';

import {ExportedMaterials} from './materials/materials-export';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {BasicAuthInterceptor} from './provider/basicauth.interceptor';
import {EditAreaComponent} from "./editarea/editarea.component";
import {CodemirrorModule} from "ng2-codemirror";
import {BaseComponent} from "./base.component";

@NgModule({
  declarations: [
    AppComponent, FTreeComponent, FeditComponent,
    GetFileName, ByteFormat, NewFileDialog, ContextMenuPanel,
    LoginDialog, EditAreaComponent, BaseComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    ExportedMaterials, NoopAnimationsModule, CodemirrorModule
  ],
  entryComponents: [NewFileDialog, ContextMenuPanel, LoginDialog],
  providers: [FileService, {
    provide: HTTP_INTERCEPTORS,
    useClass: BasicAuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

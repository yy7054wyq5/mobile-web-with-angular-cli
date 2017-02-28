import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material'; // ui库
import 'hammerjs'; // ui库所需

import { AppComponent } from './app.component'; // 根组件
import { DetailComponent } from './view/detail/detail.component';
import { HomeComponent } from './view/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { HelloNg2Component } from './component/hello-ng2/hello-ng2.component';

import { LoaderService } from './service/loader.service';
import { StorageService } from './service/storage.service';
import { ApiService } from './service/api.service';

const appRoutes: Routes = [
  { path: 'product/:id', // 路由器会用它来匹配浏览器地址栏中的地址，如product。
    component: DetailComponent, // 导航到此路由时，路由器需要创建的组件DetailComponent
    data: { // 用来保存诸如 页标题、面包屑以及其它只读数据
      title: '产品详情'
    }
  },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent } // 需要显示404页面或者重定向到其它路由时，该特性非常有用
];

@NgModule({
  // 声明本模块中拥有的视图类。 Angular 有三种视图类：组件、指令和管道。
  declarations: [
    AppComponent,
    HelloNg2Component,
    DetailComponent,
    HomeComponent,
    FooterComponent,
  ],
  // 本模块声明的组件模板需要的类所在的其它模块。
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
  ],
  // 服务的创建者，并加入到全局服务列表中，可用于应用任何部分
  providers: [LoaderService, ApiService, StorageService],
  // 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性
  bootstrap: [AppComponent]
})
export class AppModule { }

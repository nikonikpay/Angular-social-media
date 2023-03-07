import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  saveNewPost(postObj:any){
    return new Promise((resolve,reject)=>{
      this.http.post('http://localhost:3000/posts', postObj).subscribe(
        (res: any)=>{
          resolve(res);
        },
        (err: any)=>{
          reject(err);
        }
      );
    });
  }

  getPosts(){
    return new Promise((resolve, reject)=>{
      this.http.get('http://localhost:3000/posts').subscribe(
        (res: unknown)=>{
          resolve(res);
        },
        (err: any)=>{
          reject(err);
        }
      );
    })
  }

  updateLikes(postObj:any){
    return new Promise((resolve, reject)=>{
      this.http.put('http://localhost:3000/posts/' + postObj.id, postObj).subscribe(
        (res: unknown)=>{
          resolve(res);
        },
        (err: any)=>{
          reject(err);
        }
      );
    });
  }

  updateComments(postObj:any){
    return new Promise((resolve, reject)=>{
      this.http.put('http://localhost:3000/posts/' + postObj.id, postObj).subscribe(
        (res: unknown)=>{
          resolve(res);
        },
        (err: any)=>{
          reject(err);
        }
      );
    });
  }
}

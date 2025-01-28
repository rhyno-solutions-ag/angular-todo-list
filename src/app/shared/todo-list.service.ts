
import { inject, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from './todo';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  public todos: Todo[] = [];

  private userUid = '';
  private todoSubscription: Subscription = Subscription.EMPTY;
  // private firestore = inject(Firestore);
  // private afAuth = inject(AngularFireAuth);


  constructor(
    // private firestore: AngularFirestore,
    // private afAuth: AngularFireAuth
  ) {
    // const itemCollection = collection(this.firestore, 'todos')
    // const item$ = collectionData(itemCollection);
    // item$.subscribe((data) => {
    //   console.log(data)
    // })


    // this.afAuth.authState.subscribe((state) => {
    //   if (state?.uid) {
    //     this.userUid = state.uid;
    //
    //
    //
    //
    //     // this.todoSubscription = this.firestore
    //     //   .collection('todo', (ref) => {
    //     //     return ref.where('userUid', '==', this.userUid);
    //     //   })
    //     //   .snapshotChanges()
    //     //   .subscribe((data) => {
    //     //     this.todos = data
    //     //       .map((e) => {
    //     //         return {
    //     //           id: e.payload.doc.id,
    //     //           ...(e.payload.doc.data() as Object),
    //     //         } as Todo;
    //     //       })
    //     //       .sort((a, b) => {
    //     //         return a.dueDate > b.dueDate ? 1 : -1;
    //     //       });
    //     //   });
    //   } else {
    //     if (this.todoSubscription) {
    //       this.todoSubscription.unsubscribe();
    //     }
    //
    //     this.userUid = '';
    //     this.todos = [];
    //   }
    // });
  }

  ngOnInit(): void {}

  public addTodo(description: string, dueDate: Date): void {
    // this.firestore.collection('todo').add({
    //   description: description,
    //   dueDate: dueDate,
    //   userUid: this.userUid,
    // });
  }

  public deleteTodoById(id: string): void {
    // this.firestore.doc('todo/' + id).delete();
  }

  public updateTodoById(todo: Todo): void {
    // this.firestore
    //   .doc('todo/' + todo.id)
    //   .update({ description: todo.description, dueDate: todo.dueDate });
  }

  public toggleDoneStateById(todo: Todo): void {
    // this.firestore
    //   .doc('todo/' + todo.id)
    //   .update({ doneDate: todo.doneDate ? null : new Date() });
  }
}

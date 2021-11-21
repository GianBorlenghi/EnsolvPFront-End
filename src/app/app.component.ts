import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from './services/task/task.service';
import { FolderService } from './services/Folder/folder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

taskForm:FormGroup;
folderForm:FormGroup;
folder:any;
task:any;
fold:any;

  constructor(
    public fb:FormBuilder,
    public taskService : TaskService,
    public folderService: FolderService
  ){

  }

  ngOnInit():void{
    this.taskForm = this.fb.group({
      idTask:[''],
      name :['', Validators.required],
      taskFolder:['',Validators.required]
    });{
      
  this.folderService.getAllFolder().subscribe(resp => {this.folder = resp},
    error=>(console.error(error)));
    
  }

  this.taskService.getAllTasks().subscribe(
    res=>{this.task=res}
  );

  this.folderForm = this.fb.group({
    idFolder:[''],
    folderName:['', Validators.required],
    taskFold:['']
  });
}


saveTask():void{
 
  this.taskService.addTask(this.taskForm.value).subscribe(
    resp=>{this.taskForm.reset(); alert('Task successfully saved'); window.location.reload()},
    error =>{(console.error(error))}
  )
}

delete(id:number):void{
  this.taskService.deleteTask(id).subscribe(
    resp=>{alert('Task successfully deleted');window.location.reload()}
  )
}

edit(task:any){
  this.taskForm.patchValue({
    idTask : task.idTask,
    name : task.name,
    taskFolder: task.taskFolder
  })
}

saveFolder():void{
  this.folderService.addFolder(this.folderForm.value).subscribe(
    res=>{this.taskForm.reset();alert('Folder succesffully saved'); window.location.reload();console.log(res);console.error(res)}
  )
}

deleteFolder(id:number):void{
  this.folderService.deleteFolder(id).subscribe(
    resp=>{alert('Folder successfully deleted');window.location.reload()}
  )
}

viewFolderId(fold:any):void{
  this.folderService.viewFolder(fold.idFolder).subscribe(
    resp=>{this.fold=resp;
      alert('the tasks associated with the folder '+fold.idFolder+' will be listed below');
    const t = document.getElementById("tFol");t?.classList.remove("novisible"); t?.classList.add("visible");}
  )
}




}

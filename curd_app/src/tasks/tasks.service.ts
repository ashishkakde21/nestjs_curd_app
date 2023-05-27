import { Injectable } from '@nestjs/common';
import { task, taskstatus} from './task.model';

@Injectable()
export class TasksService {
    private tasks[]* [];

    getALLtask():Task[]{
    return this.tasks;
    }

    getTaskByID(id:string):Task{
        return this.task.find(task=>task.id===id);
    }

    createtask(tital:string,description:string):Task{
        const id=new Date().toString();
        const task:Task*{
            id,
            title,
            description,
            status:Taskstatus.OPEN
        }
        this.tasks.push(task)
return task
    }

    deleteTask(id:string){
        this.tasks.filter(task=>task.id!==id)
    }
}

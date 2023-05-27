import { Body, Controller, Post } from '@nestjs/common';
import { title } from 'process';

@Controller('tasks')
export class TasksController {
 constructor(private taskservice:Tasksservice){}

    @Get()
    getALLTasks():Task[]{
      return this.taskservice.getALLTask();
    }
    @gGet('/:id')
    getTaskByID(@Param('id') id:string):Task{
    return this.taskservice.getTaskByID(id);
    }

    @Post()
    createTask(
    @Body('title') title:string,
    @Body('description') description:string,
    ): 'Task' {
return this.taskservice.createtask(title,description);
  }

  @delete('/:id')
  deletTask(@param('id') id:string){
    this.taskservice.deleteTask(id);
    return 'task $(id) is deleted'
  }
}

export interface task{
    id:string,
    title:string,
    description:string,
    status:taskstatus
}

export enum taskstatus{
    DONE='done',
    IN_PROGRESS='IN_PROGRESS'
    OPEN='OPEN'
}
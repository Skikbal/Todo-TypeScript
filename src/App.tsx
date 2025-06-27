import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { Description, Field, Label, Select } from '@headlessui/react';
import clsx from 'clsx';
type Priority = 'low' | 'medium' | 'high' | 'urgent';
type Task = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  priority?: Priority;
};
const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
   const formData = new FormData(e.currentTarget)
   console.log(formData)
   const task:Task = {
    id: tasks.length + 1,
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    isCompleted: false,
    priority: formData.get('priority') as Priority
   }
   setTasks([...tasks, task])
  }
console.log(tasks)
  return (
    <div className="bg-slate-900 h-screen overflow-auto">
      <div className="m-auto flex justify-between px-5 py-2">
        <h1 className="text-4xl text-white">Todo App</h1>
        <p className="text-white">Jhon Doe</p>
        <div className="mt-2 flex items-center gap-x-3">
          <UserCircleIcon
            aria-hidden="true"
            className="size-12 text-gray-300"
          />
        </div>
      </div>
      <div className="w-full flex text-white gap-3 mt-5 px-15">
        <div className="bg-slate-950 w-1/2 rounded-2xl p-5">
          <h1 className="text-2xl text-center font-bold">Add Task</h1>
          <form onSubmit={handleSubmit} >
            <div className="space-y-2">
              <div className="border-b border-gray-900/10 pb-5">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
                  <div className="col-span-full">
                    <label
                      htmlFor="title"
                      className="block text-sm/6 font-medium text-white"
                    >
                      Title
                    </label>
                    <div className="mt-2">
                      <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-900 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                        <input
                          id="title"
                          name="title"
                          type="text"
                          placeholder="Work on TypeScript"
                          className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white placeholder:text-white/50 focus:outline-none sm:text-sm/6"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm/6 font-medium text-white"
                    >
                      Description
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        defaultValue={''}
                        placeholder="Work on TypeScript for the next week."
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <Field>
                      <Label className="text-sm/6 font-medium text-white">
                        Priority
                      </Label>

                      <div className="relative">
                        <Select
                          className={clsx(
                            'mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
                            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
                            // Make the text of each option black on Windows
                            '*:text-black',
                          )}
                          defaultValue="low"
                          name='priority'
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="urgent">Urgent</option>
                        </Select>
                        <ChevronDownIcon
                          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                          aria-hidden="true"
                        />
                      </div>
                    </Field>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 flex items-center justify-end gap-x-6">
              <button
                type="reset"
                className="text-sm/6 font-semibold text-white/50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="bg-slate-950 w-1/2 rounded-2xl">
          <ul>
            {tasks.map((task) => {
              return (
                <li key={task.id}>
                  <span>{task.title}</span>
                  <span> </span>
                  <span>{task.priority}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;

(()=>{"use strict";const t={projectsArray:[],projectUl:document.querySelector(".projects-ul"),createAddProject:function(){const t=document.getElementById("project").value;return new class{constructor(t){this.title=t,this.tasks=[],this.display=!1,this.taskDisplayed=!1}}(t)},displayProjects:function(){t.projectsArray.forEach((e=>{if(!e.display){e.display=!0;const c=document.createElement("li");c.classList.add("nav-item");const n=document.createElement("a");n.classList.add("nav-link","project-name"),n.textContent=e.title,n.href="#",document.getElementById("project").value="",c.appendChild(n),t.projectUl.appendChild(c)}}))}},e=t,c={createTask(){const t=document.getElementById("task").value,e=document.getElementById("date").value;return new class{constructor(t,e){this.title=t,this.date=e,this.checked=!1}}(t,e)},displayTask(t){const e=document.querySelector(".big-todos-containers"),c=document.createElement("div");c.classList.add("tasks-containers","row"),e.appendChild(c);const n=document.createElement("div");n.classList.add("left-task","col-8","row"),c.appendChild(n);const s=document.createElement("div");s.classList.add("task-time","right-task","col-4"),c.appendChild(s),s.textContent=t.date,document.getElementById("date").value="";const o=document.createElement("div");o.classList.add("checkbox","col-6"),n.appendChild(o);const a=document.createElement("div");a.classList.add("task-name","col-6"),n.appendChild(a),a.textContent=t.title,document.getElementById("task").value=""},pushTaskInProject(t){const c=document.querySelector(".project-todo-title").textContent,n=e.projectsArray.findIndex((t=>t.title===c));e.projectsArray[n].tasks.push(t)}},n=document.getElementById("save-project"),s=document.querySelector(".projects-ul"),o=document.getElementById("save-task"),a=document.querySelector(".big-todos-containers");o.addEventListener("click",(function(){const t=c.createTask();c.pushTaskInProject(t),c.displayTask(t)})),n.addEventListener("click",(function(){const t=e.createAddProject();e.projectsArray.push(t),e.displayProjects(),console.log(e.projectsArray)})),s.addEventListener("click",(function(t){if(t.target.classList.contains("project-name")){const c=t.target.textContent,n=function(t){return t.title===c},s=e.projectsArray.findIndex(n);document.querySelector(".project-todo-title").textContent=e.projectsArray[s].title;const o=document.querySelector(".big-todos-containers");for(;o.firstChild;)o.removeChild(o.firstChild)}})),a.addEventListener("click",(function(t){t.target.classList.contains("checkbox")}))})();
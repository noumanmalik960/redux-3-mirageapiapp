import { createServer } from 'miragejs'


export default function () {
  let arr = [{ id: "1", text: "First entry for psychology 101" }]

  createServer({
    routes() {
      this.namespace = "/fakeapi"
      this.get("/getTodos", { todos: arr })



      this.post("/addTodo", (_, req) => {
        console.log('req: ', req);
        arr.push(req.requestBody)
      })
    }
  });

}
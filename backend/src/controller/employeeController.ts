import { type Request, type Response } from "express";
import { db } from "../config/db.js";
import { PersonUpdate, Person, NewPerson } from "../utils/types.js";

function ensureError(value: unknown): Error {
  if (value instanceof Error) return value;

  let stringified = "[Unable to stringify the thrown value]";
  try {
    stringified = JSON.stringify(value);
  } catch {}

  const error = new Error(
    `This value was thrown as is, not through an Error: ${stringified}`,
  );
  return error;
}

const createEmployee = async (req: Request, res: Response) => {
  const person: NewPerson = { ...req.body };
  try {
    const newEmployee = await db
      .insertInto("person")
      .values(person)
      .returningAll()
      .executeTakeFirstOrThrow();
    res.status(200).send(newEmployee);
  } catch (err) {
    const error = ensureError(err);
    res.status(400).send(error.message);
  }
};

const findEmpolyeeById = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id as string);
  try {
    const employee = await db
      .selectFrom("person")
      .where("id", "=", id)
      .selectAll()
      .executeTakeFirst();
    if (employee === undefined) {
      res.status(400).send("person not exists");
    }
    res.status(200).send(employee);
  } catch (err) {
    const error = ensureError(err);
    res.status(400).send(error.message);
  }
};

const updateEmpolyee = async (req: Request, res: Response) => {
  const updateWith: PersonUpdate = { ...req.body };
  const id: number = parseInt(req.params.id as string);
  try {
    const updatedEmployee = await db
      .updateTable("person")
      .set(updateWith)
      .where("id", "=", id)
      .execute();
    if (updatedEmployee[0]?.numUpdatedRows.toString() === "0") {
      res.status(400).send("person not exists");
    }
    res.status(200).send("update");
  } catch (err) {
    console.log(err);
    const error = ensureError(err);
    res.status(400).send(error.message);
  }
};

const deleteEmployee = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id as string);
  try {
    const deletedEmployee = await db
      .deleteFrom("person")
      .where("id", "=", id)
      .returningAll()
      .executeTakeFirst();
    if (deletedEmployee === undefined) {
      res.status(400).send("person not exists");
    }
    res.status(200).send(deletedEmployee);
  } catch (err) {
    const error = ensureError(err);
    res.status(400).send(error.message);
  }
};

export { createEmployee, findEmpolyeeById, updateEmpolyee, deleteEmployee };

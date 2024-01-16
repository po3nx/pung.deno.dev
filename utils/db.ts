import * as faunadb from "https://deno.land/x/fauna@5.0.0-deno-alpha9/mod.js";
import { load } from "https://deno.land/std@0.207.0/dotenv/mod.ts";

const env = await load();

//const token = Deno.env.get("FAUNA_SECRET");
//const domain = Deno.env.get("FAUNA_DOMAIN");
const token = env["FAUNA_SECRET"];
const domain =env["FAUNA_DOMAIN"]
export const q = faunadb.query as any;

export const faunaClient = new faunadb.Client({ 
  domain: domain,
  secret: token,
});


export const getFaunaClient = (secret: string) => new faunadb.Client({
  domain: domain,
  secret,
});
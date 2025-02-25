import Image from 'next/image'
import React from 'react'

export default function Technologies() {
  return (
    <div className="mt-6 flex flex-col gap-4">
    <div className="border rounded p-4 bg-secondary/5 border-secondary">
      <h2 className="border-b pb-2 mb-3 text-lg font-bold text-primary">
        Front End Skills
      </h2>

      <div className="flex flex-wrap gap-2 sm:gap-4">
        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/html.png"
            alt="html"
            width={50}
            height={50}
            className="w-5"
          />
          <h2 className="font-semibold text-neutral">HTML</h2>
        </div>

        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/css.png"
            alt="css"
            width={50}
            height={50}
            className="w-4"
          />
          <h2 className="font-semibold text-neutral">CSS</h2>
        </div>

        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/bootstrap.png"
            alt="bootstrap"
            width={50}
            height={50}
            className="w-5"
          />
          <h2 className="font-semibold text-neutral">Bootstrap</h2>
        </div>

        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/tailwind.png"
            alt="tailwindcss"
            width={50}
            height={50}
            className="w-5"
          />
          <h2 className="font-semibold text-neutral">Tailwind CSS</h2>
        </div>

        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/material.png"
            alt="material"
            width={50}
            height={50}
            className="w-5"
          />
          <h2 className="font-semibold text-neutral">Material UI</h2>
        </div>

        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/js.png"
            alt="javascript"
            width={50}
            height={50}
            className="w-5"
          />
          <h2 className="font-semibold text-neutral">JavaScript</h2>
        </div>

        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/ts.png"
            alt="typescript"
            width={50}
            height={50}
            className="w-5"
          />
          <h2 className="font-semibold text-neutral">TypeScript</h2>
        </div>

        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/react.png"
            alt="react"
            width={50}
            height={50}
            className="w-5"
          />
          <h2 className="font-semibold text-neutral">React.js</h2>
        </div>

        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/nextjs.png"
            alt="nextjs"
            width={50}
            height={50}
            className="w-5"
          />
          <h2 className="font-semibold text-neutral">Next.js</h2>
        </div>

        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/redux.png"
            alt="redux"
            width={50}
            height={50}
            className="w-5"
          />
          <h2 className="font-semibold text-neutral">Redux</h2>
        </div>
      </div>
    </div>

    <div className="border rounded p-4 bg-secondary/5 border-secondary">
      <h2 className="border-b pb-2 mb-3 text-lg font-bold text-primary">
        Back End Skills
      </h2>

      <div className="flex flex-wrap gap-2 sm:gap-4">
        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/node.png"
            alt="node"
            width={50}
            height={50}
            className="w-4"
          />
          <h2 className="font-semibold text-neutral">Node</h2>
        </div>

        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/express.png"
            alt="express"
            width={50}
            height={50}
            className="w-5"
          />
          <h2 className="font-semibold text-neutral">Express</h2>
        </div>

        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/mongodb.png"
            alt="mongodb"
            width={50}
            height={50}
            className="w-4"
          />
          <h2 className="font-semibold text-neutral">MongoDB</h2>
        </div>

        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/mongoose.png"
            alt="mongoose"
            width={50}
            height={50}
            className="w-5"
          />
          <h2 className="font-semibold text-neutral">Mongoose</h2>
        </div>

        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/dbms.png"
            alt="dbms"
            width={50}
            height={50}
            className="w-4"
          />
          <h2 className="font-semibold text-neutral">DBMS</h2>
        </div>

        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/prisma.png"
            alt="prisma"
            width={50}
            height={50}
            className="w-4"
          />
          <h2 className="font-semibold text-neutral">Prisma</h2>
        </div>

        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/sql.png"
            alt="sql"
            width={50}
            height={50}
            className="w-5"
          />
          <h2 className="font-semibold text-neutral">SQL</h2>
        </div>

        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/postgresql.png"
            alt="postgresql"
            width={50}
            height={50}
            className="w-4"
          />
          <h2 className="font-semibold text-neutral">PostgreSQL</h2>
        </div>
      </div>
    </div>

    <div className="border rounded p-4 bg-secondary/5 border-secondary">
      <h2 className="border-b pb-2 mb-3 text-lg font-bold text-primary">
        Tools
      </h2>

      <div className="flex flex-wrap gap-2 sm:gap-4">
        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/git.png"
            alt="git"
            width={50}
            height={50}
            className="w-4"
          />
          <h2 className="font-semibold text-neutral">Git</h2>
        </div>

        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/github.png"
            alt="github"
            width={50}
            height={50}
            className="w-4"
          />
          <h2 className="font-semibold text-neutral">Github</h2>
        </div>

        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/chrome-devtools.png"
            alt="chrome-devtools"
            width={50}
            height={50}
            className="w-5"
          />
          <h2 className="font-semibold text-neutral">Chrome dev tool</h2>
        </div>

        <div className="flex items-center gap-2 border rounded-md px-2 py-1.5 bg-base-100">
          <Image
            src="/technologies/figma.png"
            alt="figma"
            width={50}
            height={50}
            className="w-4"
          />
          <h2 className="font-semibold text-neutral">Figma</h2>
        </div>
      </div>
    </div>
  </div>
  )
}

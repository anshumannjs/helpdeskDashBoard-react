import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

export default function TicketList() {
  const [data, setData] = useState()
  const [dialogIndex, setDialogIndex] = useState()

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${import.meta.env.VITE_EXPRESS_URL}/ticket/ofUser/${sessionStorage.getItem("userId")}`)
      const result = await res.json()
      console.log(result)
      if (result) {
        console.log("hello")
        setData(result)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='space-y-5'>
      <h1 className='font-bold text-lg mt-3'>List of Ticket</h1>
      <Dialog>

        <Table>
          <TableCaption>A list of your created issues</TableCaption>

          <TableHeader className="">
            <TableRow>
              <TableHead className="text-center font-bold text-black">Ticket No.</TableHead>
              <TableHead className="text-center">Subject</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Support by</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="text-center">Rate</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow className="">
              <DialogTrigger>
                <TableCell className="hover:cursor-pointer underline">1234</TableCell>
              </DialogTrigger>

              <TableCell>Login issue</TableCell>
              <TableCell>
                <Badge>In Progress</Badge>
              </TableCell>
              <TableCell>Tech support</TableCell>
              <TableCell>13/08/21</TableCell>
              <TableCell>*****</TableCell>
            </TableRow>


            {
              data ? (
                data.map((value) => {
                  return (
                    <>
                      <TableRow>
                        <DialogTrigger >
                          <TableCell className="hover:cursor-pointer underline">{value._id}</TableCell>
                        </DialogTrigger>
                        <TableCell>{value.subject}</TableCell>
                        <TableCell>
                          <Badge>{value.status}</Badge>
                        </TableCell>
                        <TableCell>{value.department}</TableCell>
                        <TableCell>{value.createdAt}</TableCell>
                        <TableCell>*****</TableCell>
                      </TableRow>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="text-center">Ticket Details</DialogTitle>
                        </DialogHeader>
                        <div className='w-full'>
                          <div className='flex space-x-3'>
                            <h1>Ticket No:</h1> <span>{value._id}</span>
                          </div>
                          <div className='flex space-x-3'>
                            <h1>Date:</h1> <span>{value.createdAt}</span>
                          </div>
                          <div className='flex space-x-3 mb-3'>
                            <h1>Name:</h1> <span>{value.name}</span>
                          </div>

                          <div className='flex space-x-3 mt-3'>
                            <h1>Title:</h1> <span>{value.subject}</span>
                          </div>
                          <div className='flex space-x-3'>
                            <h1>Description:</h1> <span>{value.description}</span>
                          </div>
                          <div className='flex space-x-3'>
                            <h1>Category:</h1> <span>{value.category}</span>
                          </div>
                          <div className='flex space-x-3'>
                            <h1>Type:</h1> <span>{value.type}</span>
                          </div>
                          <div className='flex space-x-3'>
                            <h1>Priority:</h1> <span>{value.priority}</span>
                          </div>
                          <div className='flex space-x-3'>
                            <h1>Status:</h1> <span>{value.status}</span>
                          </div>
                        </div>
                      </DialogContent>
                    </>
                  )
                })
              ) : ""
            }
          </TableBody>

        </Table>


      </Dialog>

    </div>
  )
}

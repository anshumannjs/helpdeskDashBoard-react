import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Button} from "@/components/ui/button"
import { useNavigate } from 'react-router-dom'
import {Textarea} from "@/components/ui/textarea"

export default function NewTicketForm() {
    const navigate=useNavigate()

    const [name, setName]=useState("")
    const [date, setDate]=useState()
    const [department, setDepartment]=useState("")
    const [subject, setSubject]=useState("")
    const [category, setCategory]=useState("")
    const [type, setType]=useState("")
    const [priority, setPriority]=useState("")
    const [description, setDescription]=useState("")

    async function handleSubmit(){
        const res=await fetch(`${import.meta.env.VITE_EXPRESS_URL}/ticket/new`, {
            method: "POST",
            body: JSON.stringify({name, date, department, subject, category, type, priority, description, creatorId: sessionStorage.getItem("userId")}),
            headers: {"Content-Type": "application/json"}
          })
          const result=await res.json()
          console.log(result)

          if (result){
            navigate("/ticketList")
          }
    }

    return (
        <div className='w-full space-y-5 overflow-y-auto'>
            <h1 className='font-bold text-lg pt-3'>Create New Ticket</h1>

            <div className='flex text-left'>
                <div className='w-[50%] px-5'>
                    <Label>Ticket No.</Label>
                    <Input id="ticketNo"
                        type="text"
                        placeholder="18731684612"
                        required
                        disabled
                    />

                    <Label>Name</Label>
                    <Input id="name"
                        type="text"
                        placeholder="anshuman"
                        required
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </div>

                <div className='w-[50%] px-5'>
                    <Label>Date</Label>
                    <Input id="date"
                        type="date"
                        placeholder="31/03/2004"
                        required
                        value={date}
                        onChange={(e)=>setDate(e.target.value)}
                    />

                    <Label>DepartMent</Label>
                    <Input id="department"
                        type="select"
                        placeholder="Technical"
                        required
                        value={department}
                        onChange={(e)=>setDepartment(e.target.value)}
                    />
                </div>
            </div>

            <div className='w-full text-left px-5'>
                <Label>Subject</Label>
                <Input id="subject"
                    type="text"
                    placeholder="Technical"
                    required
                    value={subject}
                    onChange={(e)=>setSubject(e.target.value)}
                />
            </div>

            <div className='flex text-left'>
                <div className='w-[50%] px-5'>
                    <Label>Category</Label>
                    <Input id="category"
                        type="select"
                        placeholder="Technical"
                        required
                        value={category}
                        onChange={(e)=>setCategory(e.target.value)}
                    />

                    <Label>Type</Label>
                    <Input id="type"
                        type="text"
                        placeholder="Technical"
                        required
                        value={type}
                        onChange={(e)=>setType(e.target.value)}
                    />

                    <Label>Priority</Label>
                    <Input id="priority"
                        type="text"
                        placeholder="Technical"
                        required
                        value={priority}
                        onChange={(e)=>setPriority(e.target.value)}
                    />
                </div>

                <div className='w-[50%] px-5'>
                    <Label>Description</Label>
                    <Textarea id="description"
                        type="textarea"
                        placeholder="Technical"
                        required
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    />
                    <Button onClick={handleSubmit} className="bg-blue-400 w-full hover:bg-blue-300 mt-3">
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}

import React,  { Component } from 'react'
import Header from '../components/header.js'
import Calendar from 'react-calendar'
import PieChart from '../components/pieChart.js'

//npm install react-calendar

export default class VueAcceuil extends Component {

    render(){
        return(
            <div class="bg-gradient-to-r from-yellow-200 via-white-200 to-green-300 ...">
                <div className="vue-teacher">
                
                    <main>
                    <header>
                    

                        <h2 className="teacher">Teacher</h2>
                        <h3 className="administration">Administration</h3>

                        <div className="teacher_buttons_list">


                            <div className="buttontest" class="group inline-block">
                                <button class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                                    <span class="pr-1 font-semibold flex-1">CP1</span>
                                    <span>
                                        <svg class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </span>
                                </button>
                                <ul class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32" >
                                    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Students List</li>
                                    <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                                        <button class="w-full text-left flex items-center outline-none focus:outline-none" >
                                            <span class="pr-1 flex-1">TOEIC</span>
                                            <span class="mr-auto">
                                                <svg class="fill-current h-4 w-4 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" >
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </span>
                                        </button>
                                        <ul class="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
                                            <li class="px-3 py-1 hover:bg-gray-100">Marks</li>
                                            <li class="px-3 py-1 hover:bg-gray-100">Progress</li>
                                        </ul>
                                    </li>
                                    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Settings</li>
                                </ul>
                            </div>

                            <div class="group inline-block">
                                <button class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                                    <span class="pr-1 font-semibold flex-1">CP2</span>
                                    <span>
                                        <svg class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </span>
                                </button>
                                <ul class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32" >
                                    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Students List</li>
                                    <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                                        <button class="w-full text-left flex items-center outline-none focus:outline-none" >
                                            <span class="pr-1 flex-1">TOEIC</span>
                                            <span class="mr-auto">
                                                <svg class="fill-current h-4 w-4 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" >
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </span>
                                        </button>
                                        <ul class="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
                                            <li class="px-3 py-1 hover:bg-gray-100">Marks</li>
                                            <li class="px-3 py-1 hover:bg-gray-100">Progress</li>
                                        </ul>
                                    </li>
                                    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Settings</li>
                                </ul>
                            </div>

                            <div class="group inline-block">
                                <button class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                                    <span class="pr-1 font-semibold flex-1">ING1</span>
                                    <span>
                                        <svg class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </span>
                                </button>
                                <ul class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32" >
                                    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Students List</li>
                                    <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                                        <button class="w-full text-left flex items-center outline-none focus:outline-none" >
                                            <span class="pr-1 flex-1">TOEIC</span>
                                            <span class="mr-auto">
                                                <svg class="fill-current h-4 w-4 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" >
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </span>
                                        </button>
                                        <ul class="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
                                            <li class="px-3 py-1 hover:bg-gray-100">Marks</li>
                                            <li class="px-3 py-1 hover:bg-gray-100">Progress</li>
                                        </ul>
                                    </li>
                                    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Settings</li>
                                </ul>
                            </div>

                            <div class="group inline-block">
                                <button class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                                    <span class="pr-1 font-semibold flex-1">ING2</span>
                                    <span>
                                        <svg class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </span>
                                </button>
                                <ul class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32" >
                                    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Students List</li>
                                    <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                                        <button class="w-full text-left flex items-center outline-none focus:outline-none" >
                                            <span class="pr-1 flex-1">TOEIC</span>
                                            <span class="mr-auto">
                                                <svg class="fill-current h-4 w-4 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" >
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </span>
                                        </button>
                                        <ul class="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
                                            <li class="px-3 py-1 hover:bg-gray-100">Marks</li>
                                            <li class="px-3 py-1 hover:bg-gray-100">Progress</li>
                                        </ul>
                                    </li>
                                    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Settings</li>
                                </ul>
                            </div>

                            <div class="group inline-block">
                                <button class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                                    <span class="pr-1 font-semibold flex-1">ING3</span>
                                    <span>
                                        <svg class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </span>
                                </button>
                                <ul class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32" >
                                    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Students List</li>
                                    <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                                        <button class="w-full text-left flex items-center outline-none focus:outline-none" >
                                            <span class="pr-1 flex-1">TOEIC</span>
                                            <span class="mr-auto">
                                                <svg class="fill-current h-4 w-4 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" >
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </span>
                                        </button>
                                        <ul class="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
                                            <li class="px-3 py-1 hover:bg-gray-100">Marks</li>
                                            <li class="px-3 py-1 hover:bg-gray-100">Progress</li>
                                        </ul>
                                    </li>
                                    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Settings</li>
                                </ul>
                            </div>

                        </div>

                        <br></br> <strong><h2>Calendar</h2></strong>
                        <br></br><div className="teacher-calendar">
                            <Calendar />
                        </div>

                        <div>
                            <br></br><strong><h2> Global Progress </h2></strong>
                            <PieChart label1="Toeic" label2="Not OK" data1="57" data2="43" />
                        </div>

                    </header>
                
                </main>
              
                </div>
            </div>  
        )
    }

}

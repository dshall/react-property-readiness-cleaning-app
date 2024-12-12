import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { Bell, Search, ChevronLeft, CheckCircle, Menu, Home, Clock, Calendar, Settings, HelpCircle, LogOut, ChevronRight, Star, AlertTriangle, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Header() {
  const navigate = useNavigate();
  const [hasNotification, setHasNotification] = useState(true)

 return (
<header className="bg-white p-4 flex justify-between items-center shadow-sm">
 <Button variant="ghost" size="icon"><ChevronLeft className="h-6 w-6" /></Button>
 <div className="relative">
   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
   <input
     type="text"
     placeholder="Search Cleaning"
     className="pl-10 pr-4 py-2 border rounded-full w-64"
   />
 </div>
 <div className="flex items-center space-x-4">
   <Popover>
     <PopoverTrigger asChild>
       <Button variant="ghost" size="icon" className="relative">
         <Bell className="h-6 w-6" />
         {hasNotification && (
           <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full" />
         )}
       </Button>
     </PopoverTrigger>
     <PopoverContent>
       <div className="space-y-2">
         <h3 className="font-medium">Notifications</h3>
         <p>You have a new cleaning task.</p>
       </div>
     </PopoverContent>
   </Popover>
   <DropdownMenu>
     <DropdownMenuTrigger asChild>
       <Button variant="ghost" size="icon">
         <img src="/src/assets/profile-image.jpeg" alt="Profile" className="h-10 w-10 bg-cover bg-center bg-no-repeat rounded-full" />
       </Button>
     </DropdownMenuTrigger>
     <DropdownMenuContent >
       <DropdownMenuLabel>My Account</DropdownMenuLabel>
       <DropdownMenuSeparator />
       <DropdownMenuItem>Profile</DropdownMenuItem>
       <DropdownMenuItem>Settings</DropdownMenuItem>
       <DropdownMenuItem>Logout</DropdownMenuItem>
     </DropdownMenuContent>
   </DropdownMenu>
 </div>
</header>
/* end nav */) 
}
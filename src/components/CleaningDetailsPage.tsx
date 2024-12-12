import { useState } from "react";
import {
  Bell,
  Search,
  ChevronLeft,
  CheckCircle,
  Menu,
  Home,
  Clock,
  Calendar,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  Star,
  AlertTriangle,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import data from "./../data/tab.json";
import { TabContent } from "@/interfaces/domain/tabContent";

export default function CleaningDetailsPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [cleaningStarted, setCleaningStarted] = useState(false);
  const [currentTab, setCurrentTab] = useState("access");
  const [checklistCompleted, setChecklistCompleted] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const [currentChecklistItem, setCurrentChecklistItem] = useState(0);

  const handleStartCleaning = () => {
    setCleaningStarted(true);
    setCurrentTab("walkthrough");
  };

  const handleNextStep = () => {
    const tabOrder = ["access", "walkthrough", "checklist", "decor"];
    const currentIndex = tabOrder.indexOf(currentTab);
    if (currentIndex < tabOrder.length - 1) {
      setCurrentTab(tabOrder[currentIndex + 1]);
    } else {
      setChecklistCompleted(true);
    }
  };

  const handleConfirmation = () => {
    // Simulating confirmation logic
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 1000);
    });
  };
  const checklistItems = [
    "Vacuum all floors",
    "Dust all surfaces",
    "Clean bathroom fixtures",
    "Wipe down kitchen counters",
    "Empty all trash bins",
    "Change bed linens",
    "Clean windows and mirrors",
    "Mop hard floors",
    "Sanitize high-touch areas",
    "Arrange throw pillows and blankets",
  ];

  const tabsData: TabContent[] = data.tabs;
  return (
    <div className="p-6">
      <Card className="w-full max-w-5xl mx-auto bg-white">
        <div className="relative w-full h-[60px] overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
          {/* <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/interior-Sg3583VhxQ6x5bVnlDUKq7HJcB0yR6.jpg"
          alt="Modern living room with yellow armchair, gold lamp, and abstract art"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        /> */}
          <div className="absolute top-0 left-0 p-4 z-20 text-white">
            <p className="text-sm font-semibold">Priority Clean</p>
            <p className="text-xs">Check-in Time: 2:00 PM</p>
          </div>
        </div>
        <CardHeader>
          <CardTitle>123 Main Street, Philadelphia, PA</CardTitle>
          <CardDescription>
            Checkout Time: 11:00 AM - October 10, 2024
          </CardDescription>
        </CardHeader>
        {/* Card holds the label and content for each tab displayed */}
        <CardContent>
          {/* Display the tab labels */}
          <Tabs value={currentTab} onValueChange={setCurrentTab}>
            <TabsList className="grid w-full grid-cols-4">
              {tabsData &&
                tabsData.map((tab) => (
                  <TabsTrigger
                    className="bg-black text-white"
                    key={tab.id}
                    value={tab.title}
                  >
                    {tab.title}
                  </TabsTrigger>
                ))}
            </TabsList>
            {tabsData &&
              tabsData.map((tab) => (
                <TabsContent key={tab.id} value={tab.id}>
                  <h3 className="text-lg font-semibold mb-2">
                    {tab.title}
                  </h3>
                  {tab.description && <p>{tab.description}</p>}
                </TabsContent>
              ))}

            <TabsContent value="walkthrough">
              <h3 className="text-lg font-semibold mb-2">
                Inspection Walkthrough
              </h3>
              <div className="space-y-4">
                <div>
                  <Label>Overall Condition</Label>
                  <RadioGroup defaultValue="good">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="poor" id="condition-poor" />
                      <Label htmlFor="condition-poor">Poor</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fair" id="condition-fair" />
                      <Label htmlFor="condition-fair">Fair</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="good" id="condition-good" />
                      <Label htmlFor="condition-good">Good</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <Label>Damages</Label>
                  <Checkbox id="damages" />
                  <Label htmlFor="damages">Any visible damages?</Label>
                </div>
                <div>
                  <Label>Lighting</Label>
                  <Checkbox id="lighting" />
                  <Label htmlFor="lighting">All lights functioning?</Label>
                </div>
                <div>
                  <Label>Appliances</Label>
                  <Checkbox id="tv" />
                  <Label htmlFor="tv">TV operational?</Label>
                  <Checkbox id="appliances" />
                  <Label htmlFor="appliances">All appliances working?</Label>
                </div>
                <Button onClick={() => handleNextStep()}>Next Step</Button>
              </div>
            </TabsContent>
            <TabsContent value="checklist">
              <h3 className="text-lg font-semibold mb-2">Cleaning Checklist</h3>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">View Current Task</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="space-y-2">
                    <h4 className="font-medium">Current Task</h4>
                    <p>{checklistItems[currentChecklistItem]}</p>
                    <Button
                      onClick={() => {
                        if (currentChecklistItem < checklistItems.length - 1) {
                          setCurrentChecklistItem(currentChecklistItem + 1);
                        } else {
                          handleNextStep();
                        }
                      }}
                    >
                      {currentChecklistItem < checklistItems.length - 1
                        ? "Next Task"
                        : "Finish Checklist"}
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </TabsContent>
            <TabsContent value="decor">
              <h3 className="text-lg font-semibold mb-2">
                Interior Decor Instructions
              </h3>
              <p>
                Ensure all artwork is straight. Fluff the yellow armchair
                cushions. Arrange flowers in the vase on the side table. Ensure
                the gold floor lamp is positioned correctly next to the chair.
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          {!cleaningStarted ? (
            <Button onClick={handleStartCleaning}>Start Cleaning</Button>
          ) : !checklistCompleted ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button>Next Step</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirm Completion</DialogTitle>
                  <DialogDescription>
                    Have you completed all tasks in this section as requested?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    onClick={async () => {
                      const confirmed = await handleConfirmation();
                      if (confirmed) handleNextStep();
                    }}
                  >
                    Confirm
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ) : (
            <div className="flex items-center text-green-600">
              <CheckCircle className="mr-2" />
              Cleaning Completed
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

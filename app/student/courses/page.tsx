import { Search } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const allCourses = [
  {
    id: "1",
    title: "Toán học cơ bản",
    description:
      "Học toán một cách vui nhộn với trò chơi và hình ảnh sinh động",
    image: "/colorful-math-learning-for-kids.jpg",
    progress: 65,
    totalLessons: 20,
    completedLessons: 13,
    duration: "4 tuần",
    students: 1250,
    level: "Cơ bản",
    levelColor: "bg-blue-100 text-blue-800",
  },
  {
    id: "2",
    title: "Tiếng Anh cho trẻ em",
    description: "Phát triển kỹ năng tiếng Anh qua câu chuyện và bài hát",
    image: "/english-learning-for-children-with-books.jpg",
    progress: 40,
    totalLessons: 25,
    completedLessons: 10,
    duration: "6 tuần",
    students: 980,
    level: "Sơ cấp",
    levelColor: "bg-green-100 text-green-800",
  },
  {
    id: "3",
    title: "Khoa học thú vị",
    description: "Khám phá thế giới khoa học qua thí nghiệm đơn giản",
    image: "/fun-science-experiments-for-kids.jpg",
    progress: 25,
    totalLessons: 15,
    completedLessons: 4,
    duration: "5 tuần",
    students: 756,
    level: "Trung cấp",
    levelColor: "bg-purple-100 text-purple-800",
  },
];

const StudentCoursesPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Khóa học của tôi</h1>
        <p className="text-muted-foreground">
          Quản lý và theo dõi tiến độ học tập của bạn
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Tìm kiếm khóa học..." className="pl-10" />
        </div>
        <Select>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Lọc theo cấp độ" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả cấp độ</SelectItem>
            <SelectItem value="basic">Cơ bản</SelectItem>
            <SelectItem value="intermediate">Trung cấp</SelectItem>
            <SelectItem value="advanced">Nâng cao</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Sắp xếp theo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="progress">Tiến độ</SelectItem>
            <SelectItem value="name">Tên khóa học</SelectItem>
            <SelectItem value="recent">Gần đây nhất</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default StudentCoursesPage;

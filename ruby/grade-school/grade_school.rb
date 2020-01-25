class School
  def initialize
    @students = Hash.new { |hash, key| hash[key] = [] }
  end

  def add(student, grade)
    @students[grade].push(student)
  end

  def students(grade)
    @students[grade].sort
  end

  def students_by_grade
    return [] if @students.empty?

    @students.sort.map do |grade, students|
      { grade: grade, students: students.sort }
    end
  end
end
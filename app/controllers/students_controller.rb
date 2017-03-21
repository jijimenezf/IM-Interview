class StudentsController < ApplicationController

  def index
    #stuff will happen here
    @students = Student.all

    return @students

  end
end

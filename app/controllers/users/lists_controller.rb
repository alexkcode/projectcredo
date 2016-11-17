class Users::ListsController < ApplicationController
  before_action :ensure_current_user, except: [:index, :show]
  before_action :set_user
  before_action :set_list, except: :index

  def index
    @lists = @user.lists
    render 'lists/index'
  end

  def edit
    render 'lists/edit'
  end

  def show
    @references = @list.references.joins(:paper).order(params_sort_order)
    render 'lists/show'
  end

  def update
    respond_to do |format|
      if @list.update(list_params)
        format.html { redirect_to user_list_path(@list.user, @list), notice: 'List was successfully updated.' }
        format.json { render :show, status: :ok, location: @list }
      else
        format.html { render :edit }
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @list.destroy

    respond_to do |format|
      format.html { redirect_to lists_url, notice: 'List was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_user
      @user = User.find_by username: params[:username]
    end

    def set_list
      @list = @user.lists.find_by slug: params[:id]
    end

    def params_sort_order
      if params[:sort] == 'pub_date'
        'papers.published_at DESC NULLS LAST'
      else # default to ordering by votes first, then create date
        "cached_votes_up DESC, created_at ASC"
      end
    end

    def list_params
      params.require(:list).permit(:name, :description, :tag_list)
    end
end

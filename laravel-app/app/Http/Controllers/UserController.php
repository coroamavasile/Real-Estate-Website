<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Programare;
use App\Models\Proprietate;
use Illuminate\Support\Facades\Hash;
use Log;

class UserController extends Controller
{

    function register(Request $req)
    {
        $user = new User;
        $user->name=$req->input("name");
        $user->email=$req->input("email");
        $user->role=$req->input("role");
        $user->apartamentVanzare=false;
        $user->garsonieraVanzare=false;
        $user->casaVanzare=false;
        $user->apartamentInchiriere=false;
        $user->garsonieraInchiriere=false;
        $user->casaInchiriere=false;
        $user->password=Hash::make($req->input("password"));
        $user->save();
        return $user;
    }

    function addProgramare(Request $req)
    {

        $programare = new Programare;
        $programare->userId=$req->input("userId");
        $programare->data=$req->input("data");
        $programare->ora=$req->input("ora");
        $programare->proprietateId=$req->input("proprietateId");
        $programare->save();
        return $programare;
    }

    function login(Request $req){
        $user = User::where('email',$req->email)->first();
        if(!$user || !Hash::check($req->password, $user->password)){
            return ["error"=>"Email or password is not matched"];
        }
        return $user;
    }

    function editUser(Request $req){

        $user = User::where('id',$req->id)->first();
        $user->update(['name'=>$req->name]);
        $user->update(['email'=>$req->email]);
        $user->update(['apartamentVanzare'=>$req->apartamentVanzare]);
        $user->update(['garsonieraVanzare'=>$req->garsonieraVanzare]);
        $user->update(['casaVanzare'=>$req->casaVanzare]);
        $user->update(['apartamentInchiriere'=>$req->apartamentInchiriere]);
        $user->update(['garsonieraInchiriere'=>$req->garsonieraInchiriere]);
        $user->update(['casaInchiriere'=>$req->casaInchiriere]);
        return $user;
    }

    function list()
    {
        return User::all();
    }

    function delete($id){
        $result = User::where("id",$id)->delete();
        if($result){
            return ["User has been deleted"];
        }
    }

    function getUser($id){

        return User::find($id);
    }

    function addFile(Request $req){

        return $req->file('file')->store('gdpr');
    }

    function addProprietate(Request $req){
        $proprietate = new Proprietate();
        $proprietate->title=$req->input("title");
        $proprietate->userId=$req->input("userId");
        $proprietate->type=$req->input("type");
        $proprietate->description=$req->input("description");
        $proprietate->title=$req->input("title");
        $proprietate->price=$req->input("price");
        $proprietate->address=$req->input("address");
        $proprietate->ownerName=$req->input("ownerName");
        $proprietate->imageUrl=$req->input("imageUrl");
        $proprietate->rent=$req->input("rent");
        $proprietate->save();
        return $proprietate;
    }

    function listProperties()
    {
        return Proprietate::all();
    }


    function listAppointments()
    {
        return Programare::all();
    }

}

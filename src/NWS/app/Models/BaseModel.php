<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model{

    protected $guarded = [];

    public $timestamps = false;
    public $incrementing = false;
    const CREATED_AT = 'CREATE_DATE';
    const UPDATED_AT = 'UPDATE_DATE';
}